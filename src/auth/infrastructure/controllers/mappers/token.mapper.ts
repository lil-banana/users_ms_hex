import { TokenDto } from '../dtos/token.dto';

export class TokenDtoMapper {
    toTokenDto(token: string): TokenDto {
        const tokenDto: TokenDto = new TokenDto();
        tokenDto.access_token = token;
        return tokenDto; 
    }
}