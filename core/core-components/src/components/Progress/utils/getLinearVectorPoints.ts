export const getLinearVectorPoints = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    const sin = Math.sin(radians);
    const cos = Math.cos(radians);

    const startPoint = {
        x: (sin * -1 + 1) / 2,
        y: (cos * 1 + 1) / 2,
    };
    const endPoint = {
        x: (sin * 1 + 1) / 2,
        y: (cos * -1 + 1) / 2,
    };

    return {
        startPoint: {
            x: Number(startPoint.x.toFixed(2)),
            y: Number(startPoint.y.toFixed(2)),
        },
        endPoint: {
            x: Number(endPoint.x.toFixed(2)),
            y: Number(endPoint.y.toFixed(2)),
        },
    };
};
