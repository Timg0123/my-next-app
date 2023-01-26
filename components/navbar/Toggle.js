import { useState } from 'react'
import { Switch } from '@headlessui/react'

const Toggle = () => {
  const [enabled, setEnabled] = useState(false)

  const handleSwitch = () => {
    setEnabled(!enabled)
    console.log(enabled)
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleSwitch}
      className={`${
        enabled
          ? 'bg-indigo-500 hover:shadow-[0_0_13px_1px_rgb(99,102,241)]'
          : 'bg-white'
      } relative inline-flex h-6 w-12 items-center rounded-full shadow-[0_0_20px_2px_rgba(0,0,0,0.1)] duration-300 `}
    >
      <span
        className={`${
          enabled
            ? 'translate-x-6 bg-neutral-700'
            : 'translate-x-1 bg-slate-700'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default Toggle
