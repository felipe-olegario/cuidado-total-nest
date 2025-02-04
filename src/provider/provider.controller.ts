import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto, GetProvidersDto, LoginDto } from './dto/provider.dto';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providerService.create(createProviderDto);
  }

  @Get()
  findAll(@Query() getProvidersDto: GetProvidersDto) {
    return this.providerService.findAll(getProvidersDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProviderDto: CreateProviderDto) {
    return this.providerService.update(id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providerService.remove(id);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.providerService.login(loginDto.email, loginDto.password);
  }
}
