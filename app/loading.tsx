import SplitText from "@/components/SplitText";
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <SplitText
                text="Loading..."
                className="text-6xl font-bold text-white mb-4"
                delay={0.2}
                animationFrom={{ opacity: 0, y: 50 }}
                animationTo={{ opacity: 1, y: 0 }}
            />
        </div>
    );
}
