import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

const XButton: React.FC<{label: string, icon?: string, className?: string}> = (props) => {
    return (
        <Button {...props} 
            pt={{
                label: { className: 'bg-red-600 p-3 text-white hover:bg-red-700 rounded' },
            }}>
        </Button>
    )
}

export default XButton;