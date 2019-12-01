import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('product')
export class Product {
	@PrimaryGeneratedColumn('uuid') idProduct: string

	@Column('varchar', { length: 200})
	name: string

	@Column('varchar', { length: 500})
	description: string

	@Column('numeric')
	price: number

	@Column('numeric') 
	stock: number

	@Column('numeric') 
	idSubcategory: number
	
	@Column('numeric') 
	idCompanyBranch: number
	
	@Column('boolean') 
	state: boolean
}