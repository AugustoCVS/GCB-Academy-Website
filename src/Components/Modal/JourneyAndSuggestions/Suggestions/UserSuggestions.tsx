import React, { useEffect, useState, forwardRef, ForwardedRef } from 'react'
import { WarningCircle } from 'phosphor-react'
import { getDatabase, ref, child, get } from 'firebase/database'
import { Suggestions } from './styles'

export interface Suggestion {
  id: string
  author?: string | null | undefined
  title: string
  description: string
}

type Props = {
  journey: string
  onSelectSuggestion: (suggestion: Suggestion) => void
}

const UserSuggestions = forwardRef(function UserSuggestions(
  { journey, onSelectSuggestion }: Props,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) {
  const [suggestionsList, setSuggestionsList] = useState<Suggestion[]>([])

  async function generateSuggestionsList() {
    const dbRef = ref(getDatabase())
    try {
      const snapshot = await get(child(dbRef, `suggestions${journey}`))
      const suggestionsData = snapshot.val()

      if (suggestionsData) {
        const suggestions = Object.keys(suggestionsData).map((key) => ({
          id: key,
          author: suggestionsData[key].author,
          title: suggestionsData[key].title,
          description: suggestionsData[key].description,
        }))

        setSuggestionsList(suggestions)
      } else {
        console.log('No data available')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    generateSuggestionsList()
  }, [])

  return (
    <div ref={forwardedRef}>
      {suggestionsList.map((suggestion) => (
        <Suggestions
          key={suggestion.id}
          onClick={() => onSelectSuggestion(suggestion)}
        >
          <div>
            <WarningCircle size={20} />
            <p>{suggestion.title}</p>
          </div>
          <p>{suggestion.author}</p>
        </Suggestions>
      ))}
    </div>
  )
})

export default UserSuggestions
