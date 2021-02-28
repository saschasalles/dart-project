import { Module } from '@nestjs/common';
import { PlayerService } from './player.service'
import { PlayerController } from './player.controller'
import PlayerEntity from './player.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [ TypeOrmModule.forFeature([ PlayerEntity ]) ],
	controllers: [ PlayerController ],
	providers: [ PlayerService ]
})
export class PlayerModule {}
