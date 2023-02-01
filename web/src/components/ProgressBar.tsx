interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div 
        role="progressbar"
        aria-label="progresso de habitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}

/* quando a gnt vai alterar algum css e a gnt quer colocar o valor dessa propriedade no css com base em uma propriedade do JS a gnt acaba n usando o tailwind */