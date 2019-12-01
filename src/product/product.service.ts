import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Product} from './product.entity'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
	constructor (@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

	async createProduct (data: CreateProductDto): Promise<Product> {
		let product = new Product()
		product.name = data.name;
		product.description = data.description;
		product.price = data.price;
		product.stock = data.stock;
		product.idSubcategory = data.idSubcategory;
		product.idCompanyBranch = data.idCompanyBranch;
		await this.productRepository.save(product)
		return product
	}


	async getProducts () {
		return await this.productRepository.find()
	}
}