export default function Button({ children, variant = 'primary', ...props }) {
  const styles = {
    primary: 'bg-everyRunOrange hover:bg-everyRunOrange/90 text-white',
    secondary: 'border-2 border-white hover:bg-white hover:text-black',
  }

  return (
    <button
      className={`${styles[variant]} px-8 py-3 rounded-full font-semibold transition-colors`}
      {...props}
    >
      {children}
    </button>
  )
}
