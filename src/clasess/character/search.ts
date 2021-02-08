import Character, { ICharacter } from '../../models/characters.model';

type TResponse = {
  data: Array<ICharacter | []>;
  error: any;
  msg: string;
  status: number;
};

const fieldsSearch = [
  { name: ['japones', 'romaji', 'principal'] },
  {
    information: [
      'birth',
      'gender',
      'state',
      'classification',
      'occupation',
      'affiliation'
    ]
  },
  { rank: ['grade'] }
];
export class CSearchCharacter implements ISCharacter {
  private response: TResponse;
  constructor(
    private field: string,
    private value: string | number,
    private sub: number
  ) {
    this.response = {
      data: [],
      error: false,
      msg: '',
      status: 200
    };
  }
  async search() {
    try {
      let query: object = {};

      const properity = fieldsSearch.reduce((acc: any, x: any) => {
        x[this.field] !== undefined ? (acc = acc.concat(x[this.field])) : null;
        return acc;
      }, []);

      properity[this.sub] != 'affiliation'
        ? (query = {
            $match: {
              [`${this.field}.${properity[this.sub]}`]: {
                $regex: this.value,
                $options: '$i'
              }
            }
          })
        : (query = {
            $match: {
              [`${this.field}.${properity[this.sub]}`]: { $in: [/[a-z]/gi, [this.value]] }
            }
          });

      const result: Array<ICharacter> = await Character.aggregate([query]);
      
      this.response.data = result;
      this.response.msg = 'OK';
      return this.response;
    } catch (error) {
      this.response.error = error;
      this.response.msg = 'Request failed';
      this.response.status = 500;
      return this.response;
    }
  }
}
