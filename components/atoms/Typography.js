export default function Heading({ children, level = 1 }) {
  const Tag = `h${level}`
  const sizes = {
    1: 'text-4xl md:text-8xl',
    2: 'text-3xl md:text-5xl',
    3: 'text-2xl md:text-4xl',
  }

  return <Tag className={`${sizes[level]} font-bold mb-4`}>{children}</Tag>
}
