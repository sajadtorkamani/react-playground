import React from 'react'

interface Props {
  actions?: { label: string; action: () => void }[]
  children: React.ReactNode
  title?: string
}

const Card: React.FC<Props> = ({ actions = [], children, title }) => (
  <div className="mb-3">
    {title && (
      <header className="flex justify-between border bg-gray-100 border-b-0 px-2 py-1 text-xs text-gray-600">
        <span>{title}</span>

        {actions?.length > 0 && (
          <div>
            {actions.map((action, index) => (
              <button
                key={index}
                className="text-xs italic"
                onClick={action.action}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </header>
    )}
    <div className="border p-3">{children}</div>
  </div>
)

export default Card
