

export default function CadastroMenuLayout({
  children, //says if it'll be a page or nested layout
}:{
  children: React.ReactNode
}) {
  return (
    <section>

      

      {children}
    </section>
  )
}