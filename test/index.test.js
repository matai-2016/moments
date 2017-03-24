import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', t => {
  const expected = '<ErrorMessage />'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})
