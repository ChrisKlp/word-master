import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="px-20 py-10 grid justify-items-start gap-4">
      <Button>Hello</Button>
      <Button size={'sm'}>Hello</Button>
      <Button size={'lg'}>Hello</Button>
      <Button variant={'default'}>Hello</Button>
      <Button variant={'primary'}>Hello</Button>
      <Button variant={'primaryOutline'}>Hello</Button>
      <Button variant={'secondary'}>Hello</Button>
      <Button variant={'secondaryOutline'}>Hello</Button>
      <Button variant={'danger'}>Hello</Button>
      <Button variant={'dangerOutline'}>Hello</Button>
      <Button variant={'ghost'}>Hello</Button>
      <Button variant={'sidebar'}>Hello</Button>
      <Button variant={'sidebarOutline'}>Hello</Button>
    </div>
  );
}
