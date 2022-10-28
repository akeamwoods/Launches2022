// hello.test.js

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Card } from './../src/components/card';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Succesful launches render correctly', () => {
  act(() => {
    render(
      <Card
        missionName={'Mission Name'}
        launchDateUtc={'2006-03-17T00:00:00.000Z'}
        flightNumber={1}
        launchSuccess={true}
        links={{ missionPatchSmall: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' }}
        rocket={{
          firstStage: { cores: [{ coreSerial: '1' }] },
          secondStage: { payloads: [{ payloadId: '1', payloadType: '1' }] },
        }}
      />,
      container
    );
  });
  expect(container.querySelector('[data-testid="card-footer"]').textContent).toEqual('Success');
});

it('Unsuccesful launches render correctly', () => {
  act(() => {
    render(
      <Card
        missionName={'Mission Name'}
        launchDateUtc={'2006-03-17T00:00:00.000Z'}
        flightNumber={1}
        launchSuccess={false}
        links={{ missionPatchSmall: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' }}
        rocket={{
          firstStage: { cores: [{ coreSerial: '1' }] },
          secondStage: { payloads: [{ payloadId: '1', payloadType: '1' }] },
        }}
      />,
      container
    );
  });
  expect(container.querySelector('[data-testid="card-footer"]').textContent).toEqual('Failure');
});
