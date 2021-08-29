const Color = require("../models/Color");

class ColorController {
	constructor() {
		this.ColorModel = new Color();
	}

	async searchColors(request, response) {
		try {
			const { body } = request;
			const { searchString } = body;
			const stringHalfLength = (searchString.length)/2;
			let dividedString = searchString.split([stringHalfLength]);
			console.log("Tamanho da string >> ", dividedString);
			let color = await this.ColorModel.getAllColors();
			if (color) {
				return response.status(200).json(color);
			} else {
				return response.status(400).json({ error: "Cores não foram encontradas" });
			}
		} catch (error) {
			throw new Error(error);
		}
	} 
}

module.exports = new ColorController();
// utilizar o método split() para separar a string de busca na metade (lenght/2?????)
// talvez utilizar o método charCodeAt() para transformar caracteres em números

// utilizar método filter() para separar o novo array com o range calculado
// gerar 5 números aleatórios para retornar de dentro do arrayRanged utilizando mais um filter()
