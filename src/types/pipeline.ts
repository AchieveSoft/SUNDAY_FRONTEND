export type State = 'pass' | 'running' | 'pause' | 'fail' 

export interface Stage {
    stageCode?: string,
    stageName?: string,
    state?: State
}

export interface Pipeline {
    pipelineCode?: string,
    pipelineName?: string,
    latestInstance?: string,
    stages?: Stage[]
}
