export function sumAllChildrensCount(children) {
    let score = 0
    function recursiveCount (children)  {
        children.forEach(child => {
            score += child.count
            if (child?.children?.length>0) {
                recursiveCount(child?.children)
            }
        })
    }
    recursiveCount(children)
    return score
}