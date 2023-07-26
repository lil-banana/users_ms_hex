import { TokenDtoMapper } from '../../../../../../src/auth/infrastructure/controllers/mappers/token.mapper';
import { TOKEN_DTO } from '../../../mocks/tokenDto.mock';
import { TokenDto } from '../../../../../../src/auth/infrastructure/controllers/dtos/token.dto';

describe('Token Dto Mapper', () => {
    let tokenDtoMapper: TokenDtoMapper;

    beforeEach(() => {
        tokenDtoMapper = new TokenDtoMapper();
    });

    describe('toTokenDto', () => {
        it('should map string to TokenDto', () => {
            const token: string = TOKEN_DTO.access_token;
            const expectedTokenDto: TokenDto = TOKEN_DTO;

            const tokenDto = tokenDtoMapper.toTokenDto(token);

            expect(tokenDto).toEqual(expectedTokenDto);
        });
    });
});
