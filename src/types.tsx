type LaunchFailureType = {
  time: number;
  altitude: null | number;
  reason: string;
};

type Cores = {
  coreSerial: string;
};

type Payload = {
  payloadId: string;
  payloadType: string;
};

export type SpaceDataType = {
  flightNumber: number;
  missionName: string;
  launchDateUtc: string;
  links: {
    missionPatch: string;
  };
  rocket: {
    firstStage: {
      cores: Cores[];
    };
    secondStage: {
      payloads: Payload[];
    };
  };
  coresSerial: string;
  launchSuccess: boolean;
  launchFailureDetails: null | LaunchFailureType;
};

export type Direction = 'Left' | 'Right';
