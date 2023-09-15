export class Time {
    private _id! : string;
    private _nome : string;
    private _cidade : string;
    private _pais! : string;
    private _estadio! : string;
    private _estadioCapacidade! : number;
    private _dataFundacao! : number;

    //Obrigatorios Enviar
    constructor(nome : string, cidade : string){
        this._nome = nome;
        this._cidade = cidade;
    }


	public get nome(): string {
		return this._nome;
	}

	public get cidade(): string {
		return this._cidade;
	}


	public get pais(): string {
		return this._pais;
	}


	public get estadio(): string {
		return this._estadio;
	}

	public get estadioCapacidade(): number {
		return this._estadioCapacidade;
	}

	public get dataFundacao(): number {
		return this._dataFundacao;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set cidade(value: string) {
		this._cidade = value;
	}

	public set pais(value: string) {
		this._pais = value;
	}

	public set estadio(value: string) {
		this._estadio = value;
	}

	public set estadioCapacidade(value: number) {
		this._estadioCapacidade = value;
	}

	public set dataFundacao(value: number) {
		this._dataFundacao = value;
	}
    

}