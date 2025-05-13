import type {Config} from 'jest'

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    collectCoverage: true,
    coverageReporters: ['text', 'lcov'],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/fileMock.ts'
    }
}

export default config
