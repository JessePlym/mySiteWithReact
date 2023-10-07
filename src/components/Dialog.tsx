import { ReactNode, useLayoutEffect, useRef } from "react"
import "../styles/dialog.css"

export type DialogProps = {
  children: ReactNode
  open?: boolean
  onClose?: () => void
}

export default function Dialog({ children, open }: DialogProps) {

  const dialogRef = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    if (open && !dialogRef.current?.open) {
      dialogRef.current?.showModal()
    } else if (!open && dialogRef.current?.open) {
      dialogRef.current?.close()
    }
  }, [open])
  
  return (
    <dialog ref={dialogRef} className="modal">
      {children}
    </dialog>
  )
}
