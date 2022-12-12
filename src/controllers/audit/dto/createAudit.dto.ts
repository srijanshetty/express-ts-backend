import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

class CreateAuditDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  userId!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  eventType!: string;

  @IsNotEmpty()
  @IsNumber()
  level!: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(16)
  createdBy!: string;
}

export default CreateAuditDto;
