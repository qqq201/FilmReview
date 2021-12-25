import './PendingReviewPage.css'
import ReviewCard  from "../../components/ReviewCard/ReviewCard.js"

const reviews = [
    {
        name: "ABC",
        avatar: "https://s3-alpha-sig.figma.com/img/ecce/e0d0/616d420a4c92d9a84f1a4eeba219747c?Expires=1640563200&Signature=Pvbq97fe2czbFoItAB3HyAtlgw3wRlTXE7QuGgiSnPPMPLx8nevv--1~hdRc~QeswEDjFSuhUoEi-b1wmGH5QG5nytgYwovOYbgmbLnYvkbxrynLOEkNRqdgRTnnCwqY0~WyOxIOALR12FG1Pt-hbjYXp6F~CngYuxtAaQnrFQnxS72zuqCpowriNWoSLAv5yhq8StRyAUrOZDlREtzD~GHJ5pAwioLoDPvQamLHyizy0zB7Po71zkpSCe5EWAExcwkKwn0FM55nnL9sO8RvF6haPNnW~357Gy7gcsZKeydURsnQdO6r9PC2pez7uEVi6o9UwOrBFr4H2txN0XbxXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        date: "20:00 8/11/2021",
        description: "Perfect",
        text: "hihihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh vhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh  vhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh h h h"
    },
    {
        name: "ABC",
        avatar: "https://s3-alpha-sig.figma.com/img/ecce/e0d0/616d420a4c92d9a84f1a4eeba219747c?Expires=1640563200&Signature=Pvbq97fe2czbFoItAB3HyAtlgw3wRlTXE7QuGgiSnPPMPLx8nevv--1~hdRc~QeswEDjFSuhUoEi-b1wmGH5QG5nytgYwovOYbgmbLnYvkbxrynLOEkNRqdgRTnnCwqY0~WyOxIOALR12FG1Pt-hbjYXp6F~CngYuxtAaQnrFQnxS72zuqCpowriNWoSLAv5yhq8StRyAUrOZDlREtzD~GHJ5pAwioLoDPvQamLHyizy0zB7Po71zkpSCe5EWAExcwkKwn0FM55nnL9sO8RvF6haPNnW~357Gy7gcsZKeydURsnQdO6r9PC2pez7uEVi6o9UwOrBFr4H2txN0XbxXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        date: "20:00 8/11/2021",
        description: "Perfect",
        text: "hihihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh vhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh  vhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh h h h"
    },
    {
        name: "ABC",
        avatar: "https://s3-alpha-sig.figma.com/img/ecce/e0d0/616d420a4c92d9a84f1a4eeba219747c?Expires=1640563200&Signature=Pvbq97fe2czbFoItAB3HyAtlgw3wRlTXE7QuGgiSnPPMPLx8nevv--1~hdRc~QeswEDjFSuhUoEi-b1wmGH5QG5nytgYwovOYbgmbLnYvkbxrynLOEkNRqdgRTnnCwqY0~WyOxIOALR12FG1Pt-hbjYXp6F~CngYuxtAaQnrFQnxS72zuqCpowriNWoSLAv5yhq8StRyAUrOZDlREtzD~GHJ5pAwioLoDPvQamLHyizy0zB7Po71zkpSCe5EWAExcwkKwn0FM55nnL9sO8RvF6haPNnW~357Gy7gcsZKeydURsnQdO6r9PC2pez7uEVi6o9UwOrBFr4H2txN0XbxXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        date: "20:00 8/11/2021",
        description: "Perfect",
        text: "hihihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh vhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh hhhhhhhhhh  vhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh h h h"
    }
]

const PendingReviewPage = () => {
    return (
        <div className = "list-pending-review">
            <h1 className="pReview-page-header">Review chưa được phê duyệt</h1>
            <div className="pReview-wrapper">
                {reviews.map((review, index) => <ReviewCard key={index} index={index} review={review}/>)}
            </div>
        </div>
    )
}

export default PendingReviewPage;
