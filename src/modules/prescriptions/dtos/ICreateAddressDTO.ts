interface ICreateAddressDTO {
  street: string
  number: string
  complement?: string
  district: string
  cep: string
  city: string
  uf: string
}

export { ICreateAddressDTO }
