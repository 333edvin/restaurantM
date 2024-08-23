import Image from 'next/image';

const featuresData = [
    {
        imgSrc: '/images/icon.jpg',
        title: 'Menu For Every Taste',
        description: 'Delicious options for every palate, from classic to unique.',
    },
    {
        imgSrc: '/images/icon.jpg',
        title: 'Fresh Ingredients',
        description: 'Only the freshest, locally sourced ingredients in every dish.',
    },
    {
        imgSrc: '/images/icon.jpg',
        title: 'Fast Delivery',
        description: 'Quick and reliable delivery, bringing hot meals to your door.',
    },
];

const Features = () => {
    return (
        <div className='text-center space-y-5 p-10 bg-slate-100 '>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-3 md:col-span-2">
                    <h5>Features</h5>
                    <p className='font-semibold text-4xl'>Why People Choose Us ?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {featuresData.map((feature, index) => (
                            <div key={index} className="flex flex-col justify-center items-center py-5 md:p-10">
                                <Image src={feature.imgSrc} width={100} height={100} alt={feature.title} />
                                <div className="text-center">
                                    <h3 className="font-semibold text-xl md:text-2xl">{feature.title}</h3>
                                    <p className='text-sm'>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-3 md:col-span-1 flex justify-center items-center text-white">
                    <div className="bg-orange-500 rounded p-10 m-5 space-y-3">
                        <h5 className="text-3xl">Working Hours</h5>
                        <p className=''>Monday - Friday: 9:00 AM - 10:00 PM</p>
                        <p className=''>Saturday: 10:00 AM - 11:00 PM</p>
                        <p className=''>Sunday: 11:00 AM - 9:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
