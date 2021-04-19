var API_ACCESS_TOKEN: string = "1234567890-ABCDEFGH";

export default class HelixService {
	post(url: string, json: string, callback: () => void):Promise<any> {
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-api-key": API_ACCESS_TOKEN,
			},
			body: json,
		})
			.then(this.validateResponse)
			.then((data) => {
				return data.json();
			})
			.catch((error) => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	}

	validateResponse(response: any) {
		if (response.ok) {
			return response;
		} else {
			throw Error(response.statusText);
		}
	}

	errorGenerator(error: Error) {
		return "[HELIX Error]: " + error.message;
	}
}
