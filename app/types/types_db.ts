export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      packs: {
        Row: {
          created_at: string
          download_url: string | null
          featured: boolean | null
          id: string
          payment_url: string | null
          price: number
          release_id: string
          thumbs: Json
          title: string | null
        }
        Insert: {
          created_at?: string
          download_url?: string | null
          featured?: boolean | null
          id?: string
          payment_url?: string | null
          price: number
          release_id: string
          thumbs: Json
          title?: string | null
        }
        Update: {
          created_at?: string
          download_url?: string | null
          featured?: boolean | null
          id?: string
          payment_url?: string | null
          price?: number
          release_id?: string
          thumbs?: Json
          title?: string | null
        }
        Relationships: []
      }
      stats: {
        Row: {
          created_at: string
          gigabytes: number | null
          id: number
          loops: number | null
          packs: number | null
          seconds: number | null
        }
        Insert: {
          created_at?: string
          gigabytes?: number | null
          id?: number
          loops?: number | null
          packs?: number | null
          seconds?: number | null
        }
        Update: {
          created_at?: string
          gigabytes?: number | null
          id?: number
          loops?: number | null
          packs?: number | null
          seconds?: number | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          avatar_url: string | null
          comment: string
          created_at: string
          id: number
          name: string
        }
        Insert: {
          avatar_url?: string | null
          comment: string
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          avatar_url?: string | null
          comment?: string
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      tracks: {
        Row: {
          created_at: string
          id: string
          pack_id: string | null
          title: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          pack_id?: string | null
          title: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          pack_id?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracks_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "packs"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      random_testimonial: {
        Row: {
          avatar_url: string | null
          comment: string | null
          created_at: string | null
          id: number | null
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          comment?: string | null
          created_at?: string | null
          id?: number | null
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          comment?: string | null
          created_at?: string | null
          id?: number | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never
