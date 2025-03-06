import type { Stage } from './stage'

export interface Pipeline {
    pipelineCode?: string,
    pipelineName?: string,
    latestInstance?: string,
    stages?: Stage[]
}
