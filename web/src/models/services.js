import Mower from './assets/mower-logo.png'
import LandscapeDesign from './assets/landscape-design.png'
import Tree from './assets/tree.png'

export function ServicesObj() {
    const services = [
        {
            "type": "Landscaping",
            "description": "landscaping",
            "imageSrc": Mower,
            "imageAlt": "landscaping",
            "services":[
                {
                    "name": "Mowing",
                    "rateType": "hourly",
                    "rate": "20",
                    "description": "Our expert mowing service, for yards of any size.",
                    "imageSrc": Mower,
                    "imageAlt": "mowing"
                }, 
                {
                    "name": "Landscape Design",
                    "rateType": "hourly",
                    "rate": "30",
                    "description": "Edging, mulching, sodding, flower bed prep, and plenty of other options.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "landscape design"
                },
                {
                    "name": "Tree and Shrub Care",
                    "rateType": "hourly",
                    "rate": "20",
                    "description": "Trimming, pruning, fertilizing, and plenty of other options.",
                    "imageSrc": Tree,
                    "imageAlt": "tree"
                },
                {
                    "name": "Project Cleanup",
                    "rateType": "flat",
                    "rate": "100",
                    "description": "Let us handle your post-construction, fall, or spring clean-ups.",
                    "imageSrc": Mower,
                    "imageAlt": "cleanup"
                }
            ]
        },
        {
            "type": "Tree Removal",
            "description": "",
            "imageSrc": Tree,
            "imageAlt": "landscaping",
            "services": [
                {
                    "name": "Tree & Stump Removal",
                    "rateType": "flat",
                    "rate": "200",
                    "description": "Say goodbye to that dead or hazardous tree.",
                    "imageSrc": Tree,
                    "imageAlt": "tree"
                },
                {
                    "name": "Stump Removal",
                    "rateType": "flat",
                    "rate": "200",
                    "description": "Get rid of that pesky stump that's overstayed its welcome.",
                    "imageSrc": Tree,
                    "imageAlt": "Stump"
                }
            ]
        },
        {
            "type": "Pest & Lawn Control",
            "description": "",
            "imageSrc": LandscapeDesign,
            "imageAlt": "landscaping",
            "services": [
                {
                    "name": "Pest Spray",
                    "rateType": "flat",
                    "rate": "150",
                    "description": "Eliminate pests, protect your lawn and garden with our professional pest spray services.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "mowing"
                },
                {
                    "name": "Fertilizers",
                    "rateType": "flat",
                    "rate": "150",
                    "description": "Give your lawn and garden a healthy head start with our quality fertilizers.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "mowing"
                }
            ]
        },
        {
            "type": "Pressure Washing",
            "description": "",
            "imageSrc": LandscapeDesign,
            "imageAlt": "landscaping",
            "services": [
                {
                    "name": "Sidewalk",
                    "rateType": "flat",
                    "rate": "100",
                    "description": "Give your sidewalks new life with a thorough cleaning.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "mowing"
                },
                {
                    "name": "House / Garage",
                    "rateType": "flat",
                    "rate": "100",
                    "description": "Make your house look 20 years younger and a fresh, vibrant look.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "mowing"
                },
                {
                    "name": "Patio / Deck",
                    "rateType": "flat",
                    "rate": "100",
                    "description": "Revamp your outside space with a fresh wash.",
                    "imageSrc": LandscapeDesign,
                    "imageAlt": "mowing"
                }
            ]
        }
    ]

    return services
}