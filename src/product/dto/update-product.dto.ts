import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class UpdateProductDto {
	@Field() readonly idProduct: number
	@Field() readonly name: string
	@Field() readonly description: string
	@Field() readonly price: number
	@Field() readonly stock: number
	@Field() readonly idSubcategory: number
	@Field() readonly idCompanyBranch: number
	@Field() readonly state: boolean
}
