
export type DataResponse = {
    data: any;
    status: "SUCCESS" | "FAIL";
}

export async function fetchData(url: string): Promise<DataResponse> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            data: data,
            status: "SUCCESS",
        }
    } catch (error) {
        return {
            data: null,
            status: "FAIL",
        }
    }
}
