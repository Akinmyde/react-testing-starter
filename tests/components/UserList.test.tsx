import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('UserList', () => {
    it('Should render not user when the users array is empty', () => {
        render(<UserList users={[]} />)

        const text = screen.getByText(/no users/i)
        expect(text).toBeInTheDocument()
    })

    it('Should render a list of users', () => {
        const users: User[] = [
            { id: 1, name: 'Olu' },
            { id: 2, name: 'John' },
        ]
        render(<UserList users={users} />)

        users.forEach(user => {
            const link = screen.getByRole('link', { name: user.name})
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})