import { Field, InputType } from 'type-graphql'

@InputType()
export class InputProduct {
	@Field() readonly idProduct: string
	@Field() readonly name: string
	@Field() readonly description: string
	@Field() readonly price: number
	@Field() readonly stock: number
	@Field() readonly idSubcategory: number
	@Field() readonly idCompanyBranch: number
	@Field() readonly state: boolean
}

