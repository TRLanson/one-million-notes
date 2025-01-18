import StickyNote from "./stickyNote";

const StickyGrid = () => {
    const notes = Array.from({ length: 1000 }, (_, index) => {
        const randomX = Math.random() * 300; // 0% to 90%
        const randomY = Math.random() * 300; // 0% to 90%
        const randomRotation = Math.random() * 30 - 15; // -15deg to +15deg

        return (
            <div
                key={index}
                style={{
                    position: "absolute",
                    left: "${randomX}%",
                    top: "${randomY}%",
                    transform: "rotate(${randomRotation}deg)", 
                }}
            >
                <StickyNote />
            </div>
        );
    });

    return (
        <div className="relative h-screen w-screen"
            
        >
            {notes}
        </div>
    );
};

export default StickyGrid;
