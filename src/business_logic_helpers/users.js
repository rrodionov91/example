const { colors } = require('tailwindcss/defaultTheme')

const HIGH_SEVERITY = 'HIGH'
const LOW_SEVERITY = 'LOW'

export const severityColorsMap = {
    [HIGH_SEVERITY]: 'red',
    [LOW_SEVERITY]: 'yellow'
}

export const getSeverityColor = (severity) => severityColorsMap[severity]