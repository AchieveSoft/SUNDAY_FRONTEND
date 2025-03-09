import type { State } from './state'
import type { Task } from './task'

export interface Stage {
    stageCode?: string
    name?: string
    state?: State
    tasks?: Task[]
}
