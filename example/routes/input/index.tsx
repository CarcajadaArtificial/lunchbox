// import {
//   Fieldset,
//   Header,
//   Input,
//   Main,
//   Select,
//   Text,
//   TextArea,
// } from '../../mod.ts';
// import XIcon from 'icons/x.tsx';

export default function TestInput() {
  const selectData = ['a', 'b', 'c'];

  return (
    <>
      {
        /* <Header layout_type='center'>
        <Text type='title'>Input tests</Text>
      </Header>
      <Main layout_type='center'>
        <>
          <Text type='subheading'>Input:</Text>
          <Input />
          <Input label='label' />
          <Input error='error' label='label' />
          <Input maxWidth />

          <Text type='subheading'>Input types:</Text>
          <Input type='password' label='password' />
          <Input type='email' label='email' />
          <Input type='number' label='number' />
          <Input type='phone' label='phone' />
          <Input type='datetime-local' label='datetime-local' />
          <Input type='date' label='date' />
          <Input type='month' label='month' />
          <Input type='time' label='time' />
          <Input type='week' label='week' />

          <Text type='subheading'>TextArea:</Text>
          <TextArea />
          <TextArea label='label' />
          <TextArea error='error' label='label' />
          <TextArea maxWidth />

          <Text type='subheading'>Select:</Text>
          <Select options={selectData} />
          <Select options={selectData} label='label' />
          <Select options={selectData} error='error' label='label' />
          <Select maxWidth options={selectData} />

          <Text type='subheading'>Fieldset:</Text>
          <Fieldset
            name='test-a'
            legend='radio fieldset'
            values={['option a', 'option b', 'option c']}
          />
          <Fieldset
            name='test-b'
            legend='checkbox fieldset'
            values={['option a', 'option b', 'option c']}
            allowMultiple
          />

          <Text type='subheading'>Other inputs:</Text>
          <Input value='input button' type='button' />
          <Input value='input button' type='button' error='error' />
          <Input label='Select a number from 0 to 100.' type='range' />
          <Input
            label='Select a number from 0 to 100.'
            type='range'
            error='error'
          />
          <Input type='color' label='Select a color.' />
          <Input type='color' label='Select a color.' error='error' />
          <Input type='file' label='Upload the document.' />
          <Input type='file' label='Upload the document.' error='error' />

          <Text type='subheading'>Inputs with icons:</Text>
          <Input label='label' fieldIcon={<XIcon />} />
          <Select options={selectData} label='label' fieldIcon={<XIcon />} />
          <TextArea label='label' fieldIcon={<XIcon />} />
          <Input label='label' type='range' fieldIcon={<XIcon />} />
          <Input label='label' type='color' fieldIcon={<XIcon />} />
          <Input label='label' type='file' fieldIcon={<XIcon />} />
          <Input
            label='label'
            type='button'
            value='button'
            fieldIcon={<XIcon />}
          />
          <br />
          <Input label='label' type='radio' fieldIcon={<XIcon />} />
        </>
      </Main> */
      }
    </>
  );
}
