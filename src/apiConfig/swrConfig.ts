import useApiconfig from "./apiConfig"

export const fetcher = async (url: string) => {
    const response = await useApiconfig.get(url);
    return response.data;
}