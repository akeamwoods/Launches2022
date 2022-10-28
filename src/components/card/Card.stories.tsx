/* eslint-disable prettier/prettier */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    missionName: 'Mission Name',
    launchDateUtc: '2006-03-17T00:00:00.000Z',
    flightNumber: 1,
    launchSuccess: true,
    links: { missionPatchSmall: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' },
    rocket: {
      firstStage: {
        cores: [{ coreSerial: '1' }],
      },
      secondStage: {
        payloads: [
          {
            payloadId: '1',
            payloadType: 'type',
          },
        ],
      },
    },
  },
} as unknown as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SuccessfulLaunch = Template.bind({});
SuccessfulLaunch.args = {
  missionName: 'Mission Name',
  launchDateUtc: '2006-03-17T00:00:00.000Z',
  flightNumber: 1,
  launchSuccess: true,
  links: { missionPatchSmall: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' },
  rocket: {
    firstStage: {
      cores: [{ coreSerial: '1' }],
    },
    secondStage: {
      payloads: [
        {
          payloadId: '1',
          payloadType: 'type',
        },
      ],
    },
  },
};

export const UnsuccessfulLaunch = Template.bind({});
UnsuccessfulLaunch.args = {
  missionName: 'Mission Name',
  launchDateUtc: '2006-03-17T00:00:00.000Z',
  launchSuccess: false,
  links: { missionPatchSmall: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' },
  launchFailureDetails: { reason: 'reason' },
  rocket: {
    firstStage: {
      cores: [{ coreSerial: '1' }],
    },
    secondStage: {
      payloads: [
        {
          payloadId: '1',
          payloadType: 'type',
        },
      ],
    },
  },
};
