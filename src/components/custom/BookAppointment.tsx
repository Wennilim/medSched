import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"
import { CalendarDays } from "lucide-react"


export const BookAppointment = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [timeSlot, setTimeSlot] = useState<{ time: string }[]>([]);

    const getTime = () => {
        const timeList: { time: string }[] = [];

        for (let i = 10; i <= 12; i++) {
            timeList.push({ time: i + ":00 AM" });
            timeList.push({ time: i + ":30 AM" });
        }

        for (let i = 1; i <= 6; i++) {
            timeList.push({time: i + ":00 PM" });
            timeList.push({time: i + ":30 PM" });
        }

        setTimeSlot(timeList)
    }

    useEffect(() => {
        getTime()
    }, [])

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='bg-logo hover:bg-hover text-white p-3 rounded-full'>Book Appointment</Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle className="font-bold text-xl flex justify-center">Book Appointment</DialogTitle>
                    <DialogDescription>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col gap-3 items-baseline">
                                <h2 className="flex gap-2 items-center">
                                    <CalendarDays className="text-logo h-5 w-5" />
                                    Select Date
                                </h2>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="border rounded-xl"
                                />
                            </div>
                            <div>
                                {timeSlot?.map((item) => {
                                    console.log(item)
                                    return (
                                        <h2>{item.time}</h2>

                                    )
                                })}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
