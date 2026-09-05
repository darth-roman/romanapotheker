import { Qcm } from "../components/Qcm";
import { Subject } from "../components/Subject";
import { supabase } from "../utils/supabase"
import { useState, useEffect } from 'react'



export function Curriculum(){
    const [subjects, setSubjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    async function fetchSubjects(){
        const { data, error } = await supabase.schema("public").from("subjects").select("*")
        if (error) {
            throw error
        }
        return data
    }

    useEffect(() => {
        let cancelled = false

        fetchSubjects().then((data) => {
            if (!cancelled) {
                setSubjects(data)
                setLoading(false)
            }
        }).catch((error) => {
            if (!cancelled) {
                console.error(error)
                setErrorMessage(error.message || 'Unable to load subjects.')
                setLoading(false)
            }
        })

        

        return () => {
            cancelled = true
        }
    }, [])
    return(
    <>
        <section id="welcome">
            <h2>Welcome to Pharmacy</h2>
            <p>
                First of all, congratulations 🥳🎉 for being accepted to this field,
                whether you chose to be here or sent to be here,
                you are in for a great adventure (+💶💶💶)
            </p>
            <p>
                My name is Abderrahmane, you can call me Roman,  and I am a 4th year student
                <p>
                    This is a small gift from me, and some other colleagues who helped collecting 
                    some resources, to you!
                </p>
                <p>
                    This is a guide to your new journey, that is designed to help you find useful resources,
                    information about what will you study and advices from other students who have been in your shoes
                </p>
            </p>
            <p>
                And my favorite advice, comes from the Latin saying "<strong><em>Si vis pacem, para bellum</em></strong>", if you want peace, prepare for war!, so <strong>PREPARE FOR WAR</strong>
            </p>
            <div id="contributors"></div>
            <a href="https://darth-roman.github.io/" target="_blank" rel="noopener noreferrer">Visit My Website</a>

        </section>
        {/* <!-- These can be "pages" --> */}
        <div className="title">
            <span className="material-icons">map</span>
            <h2>Core Subjects</h2>
        </div>
        <section id="subjects">
            {loading && <p>Loading subjects...</p>}
            {!loading && errorMessage && <p>{errorMessage}</p>}
            {!loading && !errorMessage && subjects.length === 0 && <p>No subjects found.</p>}
            {!loading && !errorMessage && subjects.map((subject) => (
                <Subject
                    key={subject.id}
                    subjectIcon={subject.subject_icon}
                    subjectName={subject.subject_name}
                    coeff={subject.coeff}
                    subjectDesc={subject.subject_description}
                    linkToProgram={subject.link_to_program}
                    relatedSubjects={subject.connected_subjects}
                />
            ))}
        </section>

        <div className="title">
            <span className="material-icons">rule</span>
            <h2>Exams Books</h2>
        </div>

        <section id="qcms">
            <Qcm qcmName="Testini" rating="4.7" qcmUrl="#testini" />
            <Qcm qcmName="QCMS 25" rating="4.4" qcmUrl="#qcms-25" />
        </section>
        <div className="title">
            <span className="material-icons">psychology</span>
            <h2>TDs and TPs</h2>
        </div>

        <section id="td-tp">
            <div id="td" className="info-sect">
                <div className="sect-head">
                    <span className="material-icons">book</span>
                    <h3>TDs (Travaux Derigees)</h3>
                </div>
                <p>
                    Problem-solving and theoretical application sessions. Subjects like General Chemistry and Organic Chemistry heavily feature these to reinforce lecture concepts.
                </p>
            </div>
            <div id="tp" className="info-sect">
                <div className="sect-head">
                    <span className="material-icons">book</span>
                    <h3>TPs (Travaux Pratiques)</h3>
                </div>
                <p>
                    Problem-solving and theoretical application sessions. Subjects like General Chemistry and Organic Chemistry heavily feature these to reinforce lecture concepts.
                </p>
            </div>
        </section>
    </>
    )
}