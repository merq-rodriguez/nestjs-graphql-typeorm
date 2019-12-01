
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Product } from './product.entity'
import { CreateProductDto } from './dto/create-product.dto'
import { ProductService } from './product.service'
import { InputProduct} from './input/product.input' 

@Resolver((of) => Product)
export class ProductResolver {
	constructor (private readonly productService: ProductService) {}

	@Query(() => [ CreateProductDto])
	async getProducts () {
		return await this.productService.getProducts();
	}

	@Mutation(() => CreateProductDto)
	async createProduct (@Args('data') data: InputProduct) {
		return await this.productService.createProduct(data)
	}

}