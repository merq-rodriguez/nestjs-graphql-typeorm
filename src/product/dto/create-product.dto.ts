import { Field, ObjectType} from 'type-graphql'

@ObjectType()
export class CreateProductDto {
	@Field() readonly name: string
	@Field() readonly description: string
	@Field() readonly price: number
	@Field() readonly stock: number
	@Field() readonly idSubcategory: number
	@Field() readonly idCompanyBranch: number
	@Field() readonly state: boolean
}
