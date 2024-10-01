export type mailProps = {
  name: string
  email: string
  message: string
}

export type mailUseCasesProps = {
  createMail({ name, email, message }: mailProps): void
}
