export const getFeaturedDataOf = async (type) => {
    const response = await fetch(
        `https://erianvc.github.io/api/erianvc/${type}/featured/`,
    )
    return await response.json()
}
