import type { Stage } from './stage'

export interface Pipeline {
    pipelineCode?: string
    name?: string
    latestInstance?: string
    stages?: Stage[]
}
