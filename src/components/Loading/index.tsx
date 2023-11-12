const Loading = ({ className }: { className: string }) => (
  <div className={`spinner-border text-secondary ${className}`} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
)

export default Loading
