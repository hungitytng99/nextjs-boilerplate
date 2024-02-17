export const fetchIdentityCount = async (): Promise<{ name: string }> => {
  const fakeApi = async () => {
    return new Promise<{ name: string }>((resolve) => {
      setTimeout(() => {
        resolve({
          name: `Manh Hung__${Math.floor(Math.random() * 100)}`,
        })
      }, 400)
    })
  }
  const response = await fakeApi()
  return response
}
