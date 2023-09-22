import {
  Fieldset,
  Header,
  Input,
  Main,
  Select,
  Text,
  TextArea,
} from '../../mod.ts';

export default function TestInput() {
  const selectData = ['a', 'b', 'c'];

  return (
    <>
      <Header layout_type='center'>
        <Text type='title'>Input tests</Text>
      </Header>
      <Main layout_type='center'>
        <>
          <Text type='subheading'>Input:</Text>
          <Input />
          <Input label='label' />
          <Input error='error' label='label' />
          <Input maxWidth />

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
            name='test-a'
            legend='checkbox fieldset'
            values={['option a', 'option b', 'option c']}
            allowMultiple
          />

          <Text type='subheading'>Other inputs</Text>
          <Input type='range' />
          <Input type='color' />
          <Input type='file' />
        </>
      </Main>
    </>
  );
}
